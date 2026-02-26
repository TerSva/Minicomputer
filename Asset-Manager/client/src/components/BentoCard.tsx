import React, { ReactNode } from 'react';
import styles from './BentoGrid.module.css';

interface BentoCardProps {
  children: ReactNode;
  colSpan?: 2 | 3 | 4 | 6 | 8 | 12;
  rowSpan?: 2 | 3;
  className?: string;
  hoverable?: boolean;
  noPadding?: boolean;
  smallRadius?: boolean;
}

export function BentoCard({ 
  children, 
  colSpan = 4, 
  rowSpan,
  className = '', 
  hoverable = true,
  noPadding = false,
  smallRadius = false
}: BentoCardProps) {
  
  const classNames = [
    styles.bentoCard,
    styles[`colSpan${colSpan}`],
    rowSpan ? styles[`rowSpan${rowSpan}`] : '',
    hoverable ? styles.bentoCardHoverable : '',
    smallRadius ? styles.bentoCardSmall : '',
    noPadding ? '!p-0' : '',
    'bento-item', // For GSAP targeting
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export function BentoGrid({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={`${styles.bentoContainer} ${className}`}>
      <div className={styles.bentoGrid}>
        {children}
      </div>
    </div>
  );
}
