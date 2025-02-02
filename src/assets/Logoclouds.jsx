import quf from './images/quf.png';
import nd from './images/notredamef.png';

export default function Logoclouds()
{
    return <>
      <div className="bg-white py-24 sm:py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-gray-900">Our Mentors Come From</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6" >
      <img className="col-span-2 max-h-22 w-full object-contain lg:col-span-1" src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Incarnate-Word-Cardinals-Baseball-Logo-a9ae0fb.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:356,h:200,cg:true" alt="Transistor" width="180px" height="88px" />
      <img className="col-span-2 max-h-22 w-full object-contain lg:col-span-1" src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/logo-vertical-stacked-black-text-77be3fe.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:271,h:200,cg:true" alt="Reform" width="158" height="48" />
      <img className="col-span-2 max-h-22 w-full object-contain lg:col-span-1" src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Southalabama_jaguars_logo-bf9d3ad.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:276,h:200,cg:true" alt="Tuple" width="158" height="48" />
      <img className="col-span-2 max-h-22 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/mississippi-state-university-logo-free-77132b0.png/:/rs=w:320,h:200,cg:true,m/cr=w:320,h:200" alt="SavvyCal" width="158" height="48" />
      <img className="col-span-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1" src={quf} alt="Statamic" width="158" height="48" />
      <img className="col-span-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1" src={nd} alt="Statamic" width="158" height="48" />
    </div>
  </div>
  </div>

    </>
}