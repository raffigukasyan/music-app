export const formatTime = (time: number | undefined):string => {
    if(typeof time === "number") {
        const minutes:number = Math.floor(time / 60);
        const seconds:number = Math.floor(time % 60);

        const formatMinutes:string = minutes.toString().padStart(2, '0');
        const formatSeconds:string = seconds.toString().padStart(2, '0');

        return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00'
}