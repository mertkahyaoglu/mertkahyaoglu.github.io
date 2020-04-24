import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';
import Projects from '../Projects';

type Props = {
  title?: string,
  slug?: string,
  children: React.Node
};

const Page = ({ title, slug, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
          {slug === 'projects' && <Projects/>}
        </div>
      </div>
    </div>
  );
};

export default Page;