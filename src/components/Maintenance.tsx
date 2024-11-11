import { Button } from './';

interface MaintenanceProps {
  title: string;
}

const Maintenance: React.FC<MaintenanceProps> = ({ title }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="animate-pulse text-5xl font-bold text-center max-sm:text-2xl text-[--foreground]">
        {title}
      </h1>
      <Button href="/" title="Back To Home" type="button" />
    </section>
  );
};

export default Maintenance;
