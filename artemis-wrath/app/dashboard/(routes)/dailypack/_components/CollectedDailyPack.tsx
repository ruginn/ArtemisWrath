import CardElement from '@/app/components/Card';
import { useCollectedCards } from '@/hooks/use-collectedCards';

const CollectedDailyPack = () => {
  const collectedCards = useCollectedCards();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
      {collectedCards.collected &&
        collectedCards.cards.map((card) => {
          return (
            // <div className="h-96 w-64 bg-amber-200 flex flex-col rounded-md items-center" key={card.id}>

            //     <h1 className="text-l self-start">{card.name}</h1>
            //     {card.image &&
            //     <Image
            //     src={card.image}
            //     alt=''
            //     width={256}
            //     height={800}
            //     // className="w-60 h-auto"
            //     ></Image>
            // }
            //     <div className="w-[250px] h-[80px] border-2 border-black mt-3 rounded">
            //         <p className="text-sm leading-none">{card.description}</p>
            //     </div>
            // </div>
            <CardElement card={card} key={card.id} />
          );
        })}
    </div>
  );
};

export default CollectedDailyPack;
