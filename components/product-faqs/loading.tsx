import { Skeleton } from 'components/ui/skeleton/skeleton';


const FaqsLoading = () => {
  return (
    <div>
      {/* START NEW CODE */}
      <Skeleton className="my-4 h-16" />
      <Skeleton className="my-4 h-16" />
      <Skeleton className="my-4 h-16" />
      {/* END NEW CODE */}
    </div>
  );
};

export default FaqsLoading;
