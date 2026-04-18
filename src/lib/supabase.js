import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Only create a real client if valid env vars are provided
export const supabase =
  supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null
