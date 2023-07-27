import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full">
    {props.meta}
    <div>
      <header className="flex justify-center">
        <div className="max-w-4xl pb-8 pt-16">
          <h1 className="text-center text-3xl font-bold text-white">{AppConfig.title}</h1>
          <h2 className="text-center text-xl text-white">{AppConfig.description}</h2>
        </div>
      </header>
      <main className="text-white mb-40">{props.children}</main>
      <footer className="mt-8 bg-slate-950 bg-opacity-[50%] py-8 text-center text-sm text-white fixed bottom-0 left-0 right-0">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://github.com/annasudol">Anna Sudol</a>.
      </footer>
    </div>
  </div>
);

export { Main };
