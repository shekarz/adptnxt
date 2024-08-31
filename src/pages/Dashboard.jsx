import LinechartComponent from "../components/LinechartComponent";
import PiechartComponent from "../components/PiechartComponent";

const Dashboard = () => {
 return (
  <>
   <div className="py-2 bg-neutral-100 md:py-0 md:bg-neutral-100 md:px-3">
    <span className="bg-transparent md:bg-white text-purple-500 px-4 rounded-t-md">
     Dashboard
    </span>
   </div>
   <div className="p-7 flex flex-col md:flex-row h-full bg-neutral-200 md:p-3 gap-4">
    <div className="md:basis-2/3 w-full bg-white rounded-md h-full p-4">
     <LinechartComponent />
    </div>
    <div className="md:basis-1/3 bg-white rounded-md h-full p-4">
     <PiechartComponent />
    </div>
   </div>
  </>
 );
};

export default Dashboard;
