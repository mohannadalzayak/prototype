import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Schauen Sie sich dieses Projekt mit HTML und CSS an
                </h2>
                <p className='text-gray-500 my-2'>
                    Schauen Sie sich das Projekt an
                </p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://mohannadalzayak.github.io/test/" target='_blank' rel='noopener noreferrer'>
                        Drücken Sie
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" />
            </div>
        </div>
    )
}