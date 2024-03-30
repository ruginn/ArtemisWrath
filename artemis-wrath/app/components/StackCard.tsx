// import { Card } from '@/types/CardType';
import { PlayerCard } from '@/types/PlayerCardType';
import CardElement from '@/app/components/Card';

const StackCard = ({ card }: { card: PlayerCard }) => {
  return (
    <div className='relative'>
      <CardElement card={card} key={card.id} />
      {/* <div className='absolute -right-5 -bottom-5'>
        <CardElement card={card} key={card.id} />
      </div> */}
      <h1>
        Quantity: <b>{card.qty}</b>
      </h1>
    </div>
  );
};

export default StackCard;
