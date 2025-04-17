import Countdown from './Countdown';

function Father() {
  // 设置一个未来的时间，比如当前时间加1小时
  const deadline = new Date("2025-04-17 19:57:00");
  // deadline.setHours(deadline.getHours() + 1);
  
  return (
    <div>
      <Countdown deadline={deadline} />
    </div>
  );
}

export default Father;