export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="relative">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#007AFF]"></div>
      </div>
    </div>
  );
}
