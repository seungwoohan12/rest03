-- ============================================================
-- HANU Creative Studio — Supabase Schema
-- Supabase Dashboard > SQL Editor 에서 실행하세요
-- ============================================================

-- ── 1. profiles 테이블 (사용자 공개 프로필) ─────────────────
create table if not exists profiles (
  id          uuid references auth.users on delete cascade primary key,
  nickname    text,
  created_at  timestamptz default now() not null
);

alter table profiles enable row level security;

create policy "공개 프로필 조회"   on profiles for select using (true);
create policy "본인 프로필 생성"   on profiles for insert with check (auth.uid() = id);
create policy "본인 프로필 수정"   on profiles for update using (auth.uid() = id);

-- ── 2. posts 테이블 (게시판) ────────────────────────────────
create table if not exists posts (
  id          bigint generated always as identity primary key,
  user_id     uuid references profiles(id) on delete cascade not null,
  title       text                not null,
  content     text                not null,
  created_at  timestamptz default now() not null,
  updated_at  timestamptz default now() not null
);

alter table posts enable row level security;

create policy "전체 게시글 조회"           on posts for select using (true);
create policy "로그인 사용자 게시글 작성"   on posts for insert with check (auth.uid() = user_id);
create policy "본인 게시글 수정"           on posts for update using (auth.uid() = user_id);
create policy "본인 게시글 삭제"           on posts for delete using (auth.uid() = user_id);

-- ── 3. 회원가입 시 자동 프로필 생성 트리거 ───────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, nickname)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'nickname',
      split_part(new.email, '@', 1)
    )
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
