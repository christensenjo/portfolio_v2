import { useRive } from '@rive-app/react-canvas';

interface RiveExampleProps {
  className?: string;
}

export default function RiveExample({ className }: RiveExampleProps) {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <RiveComponent
      className={className}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}