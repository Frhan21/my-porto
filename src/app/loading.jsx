const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-color-accent"></div>
      <p className="mt-4 text-gray-500 text-color-accent">Loading...</p>
    </div>
  );
};

export default Loading;