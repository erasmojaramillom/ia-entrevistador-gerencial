'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSupabase } from '@/components/providers';
import type { User } from '@supabase/supabase-js';

export default function Header() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => {
        setUser(user);
        setLoading(false);
      });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => subscription.unsubscribe();
    }
  }, [supabase]);

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            IA Entrevistador
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Características
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Precios
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Acerca de
            </Link>

            {!loading && (
              <div className="flex items-center gap-4">
                {user ? (
                  <>
                    <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn-secondary"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-600 hover:text-gray-900">
                      Iniciar Sesión
                    </Link>
                    <Link href="/register" className="btn-primary">
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
