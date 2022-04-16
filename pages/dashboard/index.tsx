import type {NextPage}
from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

const link = [
    {
        icon: <DashboardOutlinedIcon fontSize='medium'/>,
        name: 'Dashboard',
        url: '/'
    }, {
        icon: <TocOutlinedIcon fontSize='medium'/>,
        name: 'Artikel/Konten',
        url: '#'
    }, {
        icon: <EqualizerOutlinedIcon fontSize='medium'/>,
        name: 'Analisis',
        url: '#'
    }, {
        icon: <ChatOutlinedIcon fontSize='medium'/>,
        name: 'Komentar',
        url: '#'
    }, {
        icon: <LocalAtmOutlinedIcon fontSize='medium'/>,
        name: 'AdSense',
        url: '#'
    }
]

const Dashboard: NextPage = () => {
    return (
        <div className='w-64 h-screen bg-gray-900 rounded-tr-md rounded-br-md'>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='px-6 pt-6 text-white font-bold'>
                Dashboard Navigation
            </div>
            <div className='px-6 pt-4'>
                <input type='text' className='w-full rounded-lg px-4 py-2.5 text-sm font-light bg-gray-800 text-gray-400 placeholder-gray-500' placeholder='Search'></input>
            </div>
            <div className='px-6 pt-4'>
                <hr className='border-gray-700' />
            </div>
            <div className='px-6 pt-4'>
                <ul className='flex flex-col space-y-2'>
                    {
                        link.map((page) => (
                            <li className='relative text-gray-500 align-middle'>
                                <a href={page.url} className='inline-block w-full py-2 px-4 rounded-lg text-xs hover:bg-gray-800 hover:text-white'>
                                    <div className='flex flex-row'>
                                        <div className='basis-1/4'>
                                            {page.icon}
                                        </div>
                                        <div className='basis-3/4 content-center'>
                                            {page.name}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='px-6 pt-8'>
                <hr className='border-gray-700'/>
            </div>
            <div className='px-6 pt-4'>
                <ul className='flex flex-col space-y-2'>
                    <li className='relative text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 px-4 rounded-lg text-xs hover:bg-gray-800 hover:text-white'>
                            Settings
                        </a>
                    </li>
                    <li className='relative text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 px-4 rounded-lg text-xs hover:bg-gray-800 hover:text-white'>
                            Notifications
                        </a>
                    </li>
                    <li className='relative text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 px-4 rounded-lg text-xs hover:bg-gray-800 hover:text-white'>
                            Apps
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
