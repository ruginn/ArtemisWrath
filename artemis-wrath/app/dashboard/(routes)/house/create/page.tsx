import { Button } from '@/components/ui/button';

const CreateHouse = () => {
  return (
    <div>
      <h1>Create a House</h1>
      <form action=''>
        <p>What will be the name of the House?</p>
        <input type='text' className='border-black border' />
        <p>Add a description to this House.</p>
        <input type='text' className='border-black border' />
      </form>
      <Button>Create House</Button>
    </div>
  );
};

export default CreateHouse;
