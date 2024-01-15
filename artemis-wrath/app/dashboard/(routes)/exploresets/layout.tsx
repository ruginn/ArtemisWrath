function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      {children}
    </div>
  );
}

export default layout;
