import { useRive } from '@rive-app/react-canvas';

interface LiquidGlassWindowProps {
    className?: string;
}

export default function LiquidGlassWindow({ className }: LiquidGlassWindowProps) {
    const { rive, RiveComponent } = useRive({
        src: '/assets/transparent_window.riv',
        stateMachines: "Default",
        autoplay: true,
    });

return (
    <RiveComponent
        className={className}
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
    />
);
}