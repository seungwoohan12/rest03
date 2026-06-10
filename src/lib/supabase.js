import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://bzdrzewkqxgogdebydld.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6ZHJ6ZXdrcXhnb2dkZWJ5ZGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNjM4NzYsImV4cCI6MjA5NjYzOTg3Nn0.jRf34jwLS54aHwag4N2fDCxkti9T_6KtXfS_3QCMNtU'
)
