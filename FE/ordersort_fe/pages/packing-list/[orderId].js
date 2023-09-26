import { useRouter } from 'next/router';
import PackingListByID from '../../components/packingListByID';

const PackingListPage = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const orderIdNumber = Number(orderId);

  if (isNaN(orderIdNumber)) {
    return <div>Invalid orderId</div>;
  }

  return (
    <div>
      <PackingListByID orderId={orderIdNumber} />
    </div>
  );
};

export default PackingListPage;
