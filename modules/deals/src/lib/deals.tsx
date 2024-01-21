import styles from './deals.module.scss';

/* eslint-disable-next-line */
export interface DealsProps {}

export function Deals(props: DealsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Deals!</h1>
    </div>
  );
}

export default Deals;
