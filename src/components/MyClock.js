import UseClock from "../hook/UseClock";

function MyClock() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = UseClock();
    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    );
}
export default MyClock