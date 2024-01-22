import { useParams } from 'react-router-dom';
import styles from './deals-details.module.scss';

/* eslint-disable-next-line */
export interface DealsDetailProps {}

export function DealsDetail(props: DealsDetailProps) {
  const { id } = useParams();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Deal View for id {id}!</h1>
    </div>
  );
}

export default DealsDetail;
