/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Feature from '@/components/Feature'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const plans = {
        "nl": [
            {
                name: "Intel Xeon E5-2699v4",
                id: "E5-2699v4",
            },
            {
                name: "Ryzen 9 7950x",
                id: "7950x",
            }
        ],
        "wm-uk": [
            {
                name: "Intel E5-2697",
                id: "E5-2697",
            },
            {
                name: "Intel E3-1240",
                id: "E3-1240",
            }
        ],
        "dallas": [
            {
                name: "E5-2690",
                id: "E5-2690",
            }
        ],
        "brisbane": [
            {
                name: "E5-2683v4",
                id: "E5-2683v4",
            }
        ]
    }
    const VDSPlans = {
        "nl": {
            "E5-2699v4": [
                {
                    name: "KVM Server XS",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 1,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 2,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 40,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-01",
                    text: "£5.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-02",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 2,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 4,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 60,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-02",
                    text: "£10.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-03",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 4,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 8,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 100,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-03",
                    text: "£20.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-04",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 5,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 12,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 150,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£40.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-05",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 6,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 16,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 300,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£55.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-06",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 8,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 24,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 450,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£65.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-5950x-07",
                    cpu: {
                        name: "AMD Ryzen 9 5950x",
                        cores: 10,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 32,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 500,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£85.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                }
            ],
            "7950x": [
                {
                    name: "HH-7950x-01",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 2,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 4,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 40,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-01",
                    text: "£15.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-02",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 3,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 6,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 60,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-02",
                    text: "£25.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-03",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 4,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 8,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 100,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-03",
                    text: "£50.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-04",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 5,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 12,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 150,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£65.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-05",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 6,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 16,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 300,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£75.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-06",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 8,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 24,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 450,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£90.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-7950x-07",
                    cpu: {
                        name: "AMD Ryzen 9 7950x",
                        cores: 10,
                        speed: 4.5,
                    },
                    ram: {
                        quantity: 32,
                        speed: 3600,
                        type: "DDR5",
                    },
                    storage: {
                        quantity: 500,
                        type: "NVMe",
                        descr: "7300MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£150.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                }
            ]
        },
        "wm-uk": {
            "E5-2697": [
                {
                    name: "HH-E5-2697-01",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 1,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 1,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 40,
                        type: "SSD",
                        descr: "upgradeable"
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-01",
                    text: "£1.00/3 Months",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-02",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 2,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 4,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 60,
                        type: "SSD",
                        descr: "upgradeable"
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-02",
                    text: "£15.00/Year",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-03",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 2,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 8,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 100,
                        type: "SSD",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-03",
                    text: "£5.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-04",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 3,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 12,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 150,
                        type: "SSD",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-04",
                    text: "£7.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-05",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 6,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 16,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 300,
                        type: "SSD",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-05",
                    text: "£10.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-06",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 8,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 24,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 300,
                        type: "SSD",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-06",
                    text: "£15.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2697-07",
                    cpu: {
                        name: "E5-2697 v2",
                        cores: 12,
                        speed: 2.7,
                    },
                    ram: {
                        quantity: 32,
                        speed: 1800,
                        type: "DDR3",
                    },
                    storage: {
                        quantity: 300,
                        type: "SSD",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e5-2697-07",
                    text: "£25.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                }
            ],
            "E3-1240": [
                {
                    name: "HH-E3-1240-01",
                    cpu: {
                        name: "E3-1240v6",
                        cores: 1,
                        speed: 3.7,
                    },
                    ram: {
                        quantity: 4,
                        speed: 2800,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 40,
                        type: "NVMe",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e3-1240-01",
                    text: "£5.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                        <div className="rounded-full bg-[#FF8383] border border-[#FF8383]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">Limited Stock!</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E3-1240-02",
                    cpu: {
                        name: "E3-1240v6",
                        cores: 2,
                        speed: 3.7,
                    },
                    ram: {
                        quantity: 8,
                        speed: 2800,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 60,
                        type: "NVMe",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e3-1240-02",
                    text: "£12.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                        <div className="rounded-full bg-[#FF8383] border border-[#FF8383]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">Limited Stock!</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E3-1240-03",
                    cpu: {
                        name: "E3-1240v6",
                        cores: 4,
                        speed: 3.7,
                    },
                    ram: {
                        quantity: 16,
                        speed: 2800,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 150,
                        type: "NVMe",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e3-1240-01",
                    text: "£20.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                        <div className="rounded-full bg-[#FF8383] border border-[#FF8383]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">Limited Stock!</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E3-1240-04",
                    cpu: {
                        name: "E3-1240v6",
                        cores: 8,
                        speed: 3.7,
                    },
                    ram: {
                        quantity: 32,
                        speed: 2800,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 200,
                        type: "NVMe",
                        descr: "upgradable"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-e3-1240-04",
                    text: "£35.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                        <div className="rounded-full bg-[#FF8383] border border-[#FF8383]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">Limited Stock!</span>
                        </div>
                    </>
                }
            ]
        },
        "dallas": {
            "E5-2690": [
                {
                    name: "HH-E5-2690-01",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 1,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 2,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 40,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-01",
                    text: "£5.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-02",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 2,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 4,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 60,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-02",
                    text: "£10.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-03",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 4,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 8,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 100,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-03",
                    text: "£20.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-04",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 5,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 12,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 150,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£40.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-05",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 6,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 16,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 300,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£55.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-06",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 8,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 24,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 450,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£65.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2690-07",
                    cpu: {
                        name: "Intel E5-2690",
                        cores: 12,
                        speed: 3.8,
                    },
                    ram: {
                        quantity: 32,
                        speed: 3600,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 500,
                        type: "NVMe",
                        descr: "4000MB/s R&W"
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£85.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                }
            ]
        },
        "brisbane": {
            "E5-2683v4": [
                {
                    name: "HH-E5-2683v4-01",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 1,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 2,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 100,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 5,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-01",
                    text: "£10.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-02",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 2,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 4,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 150,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 10,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-02",
                    text: "£20.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-03",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 4,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 8,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 300,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-03",
                    text: "£35.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-04",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 5,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 12,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 1000,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£55.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-05",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 6,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 16,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 1000,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 15,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£65.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-06",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 8,
                        speed: 3.4,
                    },
                    ram: {
                        quantity: 24,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 1250,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£85.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                },
                {
                    name: "HH-E5-2683v4-07",
                    cpu: {
                        name: "E5-2683v4",
                        cores: 10,
                        speed: 2.1,
                    },
                    ram: {
                        quantity: 32,
                        speed: 2100,
                        type: "DDR4",
                    },
                    storage: {
                        quantity: 2000,
                        type: "NVMe",
                        descr: ""
                    },
                    bandwidth: {
                        quantity: 20,
                        type: "TB",
                        speed: 1,
                    },
                    href: "https://billing.hhive.co.uk/store/cloud/hh-intel-04",
                    text: "£125.00/mo",
                    tags: <>
                        <div className="rounded-full bg-[#B2FF83] border border-[#B2FF83]/50 px-3 py-1 bg-opacity-20">
                            <span className="font-bold text-[14px]">30s</span>
                        </div>
                    </>
                }
            ]
        },
    }

    const [selectedLocation, setSelectedLocation] = useState("nl")
    // @ts-ignore
    const [selectedPlan, setSelectedPlan] = useState(plans[selectedLocation][0].id)
    useEffect(() => {
        // @ts-ignore
        setSelectedPlan(plans[selectedLocation][0].id)
    }, [selectedLocation])
    return (
        <main className="flex min-h-screen flex-col text-center">
            <Head>
                <title>Cloud VDS Server for Optimal VDS Hosting | HostHive</title>
                <meta name="description" content="Cloud VDS Server, Instant activation and the best prices. Enjoy our high-performance servers with a 30-day risk-free trial" />
            </Head>
            <Header />
            <div style={{
                backgroundImage: 'url(/assets/images/vps/background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }} className='flex items-center justify-center relative border-b-2 border-[#333E46]'>
                <Header />
                <div className='text-center flex flex-col justify-center items-center min-h-screen max-w-[600px] gap-8 py-32'>
                    <span className='text-7xl font-bold  text-[#F7F7F7]'>Virtual Dedicated Servers</span>
                    <span className='text-[#F7F7F7] px-3'>High-quality, intelligently routed networks with top tier carriers and peering. London-based. No contracts, no commitments, no setup or hidden fees.</span>
                    <div className='flex flex-col md:flex-row gap-4 items-center'>
                        <a href="https://trustpilot.com/reviews/hosthive.uk" target="_blank" rel="noreferrer">
                            <div className='flex flex-row gap-4 items-center'>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.964 30C18.549 30 19.4856 28.8513 19.4856 27.1282C19.4856 24.1846 17.6844 22.6051 17.4683 16.7897C22.4395 19.8769 22.8718 22.1744 25.3934 23.682C26.0418 24.041 26.5461 24.1846 27.1225 24.1846C27.987 24.1846 28.7075 23.7538 29.2118 22.9641C29.428 22.6051 29.5 22.1744 29.5 21.7436C29.5 20.8821 28.9236 20.0205 27.915 19.4462C25.3213 18.0103 22.9438 18.7282 17.8285 16.0718C22.9438 13.2718 25.3213 13.9897 27.915 12.5538C28.9236 11.9077 29.5 11.118 29.5 10.1846C29.5 9.82564 29.428 9.39487 29.2118 8.9641C28.7075 8.17436 27.987 7.74359 27.1225 7.74359C26.5461 7.74359 26.0418 7.88718 25.3934 8.24615C22.8718 9.75384 22.4395 12.2667 17.4683 15.2821C17.6124 9.46667 19.4856 7.81539 19.4856 4.8C19.4856 3.07692 18.549 2 16.964 2C15.451 2 14.5144 3.07692 14.5144 4.8C14.5144 7.81539 16.5317 9.39487 16.6758 15.2821C11.5605 12.1949 11.1282 9.75384 8.53458 8.24615C7.95821 7.88718 7.45389 7.74359 6.87752 7.74359C6.01297 7.74359 5.29251 8.17436 4.78818 8.9641C4.57205 9.39487 4.5 9.82564 4.5 10.1846C4.5 11.118 5.07637 11.9077 6.08501 12.5538C8.67867 13.9897 10.9121 13.2718 16.1715 16.0718C11.0562 18.8 8.60663 18.0103 6.08501 19.4462C5.07637 20.0205 4.5 20.8821 4.5 21.7436C4.5 22.1744 4.57205 22.6051 4.78818 22.9641C5.29251 23.7538 6.01297 24.1846 6.87752 24.1846C7.45389 24.1846 7.95821 24.041 8.53458 23.682C11.1282 22.1744 11.5605 19.9487 16.6037 16.7897C16.3876 22.6769 14.5144 24.1128 14.5144 27.1282C14.5144 28.8513 15.451 30 16.964 30Z" fill="#28A263" />
                                </svg>
                                <span className='text-[#C8C9D0] font-medium'>Rated <span className='text-white font-bold'>4.8/5.0</span> on Trustpilot</span>
                            </div>
                        </a>
                        <div className='md:block hidden bg-white h-[20px] w-[1px]' />
                        <Link href="#Plans">
                            <button className="bg-[#1D202B] border-[#2b4884] border-2 rounded-full px-4 py-1.5 group transition-all duration-300 flex flex-row items-center justify-center gap-1 text-[#81ACFF]">
                                <span className="font-medium">Build your VPS</span>
                                <svg className="mt-0.5 ml-2 -mr-1 stroke-[#81ACFF] stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                    <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                                    <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-16 py-12 text-white mx-auto container px-3'>
                <div className='flex flex-row justify-center items-center'>
                    <span className="font-medium text-6xl text-center bg-clip-text text-transparent py-3" style={{
                        backgroundImage: 'linear-gradient(178deg, #FFF 45.31%, rgba(255, 255, 255, 0.00) 100%)'
                    }}>What we bring to the table.</span>
                </div>
                <div className='grid lg:grid-cols-2 gap-12'>
                    <div className='flex flex-row items-start gap-4'>
                        <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                        </svg>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                <span className='font-bold text-2xl'>No Contracts or Hidden fees</span>
                            </div>
                            <span className='text-left'>
                                We do not believe in contracting you into a service and are confident that our VDS service speaks for itself. You are free to cancel whenever you like without penalties or quibbles.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                        </svg>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                <span className='font-bold text-2xl'>High-Performance Hardware</span>
                            </div>
                            <span className='text-left'>
                                We use the latest in NVMe SSD storage technology in all our VDS offerings, along with our high-spec server hardware to ensure the fastest platform possible in the market.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                        </svg>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                <span className='font-bold text-2xl'>Interconnectivity</span>
                            </div>
                            <span className='text-left'>
                                All of our datacenters offer diverse fibre routing via multiple carriers and redundant core switches and routers. Our network has been independently rated as being one of the fastest in the UK.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                        </svg>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                <span className='font-bold text-2xl'>Hardware RAID</span>
                            </div>
                            <span className='text-left'>
                                This feature allows you to have a hardware RAID controller that allows you to manage RAID independently and present the host a single disk per RAID array. Request this feature via a ticket.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 py-12 text-white items-center mx-auto container px-8 mt-[150px]' id="Plans">
                <div className='flex flex-col items-start w-full gap-6'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-medium text-5xl text-left'>Build your VPS</span>
                        <span className='max-w-[50ch] text-left'>High performance VDSs backed with 2Tbps+ DDoS protection, several global anycast locations, latest Ryzen and Intel hardware; all at an affordable price.</span>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:items-center gap-4 w-full">
                        <div className='flex flex-col md:flex-row items-center h-full w-full md:w-auto planbuttons'>
                            {/*// @ts-ignore */}
                            {plans[selectedLocation].map((plan, index) => (
                                <button
                                    key={index}
                                    className={`bg-[#1D1F24] px-10 py-3 h-full w-full md:w-auto hover:bg-[#393A3F] transition-all duration-300 disabled:cursor-not-allowed ${selectedPlan == plan.id && 'bg-[#393A3F]'}`}
                                    onClick={() => setSelectedPlan(plan.id)}
                                >
                                    {plan.name}
                                </button>
                            ))}
                        </div>
                        <div className='flex flex-col lg:flex-row items-center h-full w-full lg:w-auto'>
                            <button
                                className={`opacity-50 cursor-not-allowed flex flex-row items-center gap-4 bg-[#1D1F24] px-10 py-3 h-full w-full lg:w-auto rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl hover:bg-[#393A3F] transition-all duration-300 disabled:cursor-not-allowed ${selectedLocation == "nl" && 'bg-[#393A3F]'}`}
                                onClick={() => {
                                    // setSelectedPlan(plans['london'][0].id)
                                    // setSelectedLocation('london')
                                }}
                            >
                                <img className='h-6 w-6' src="data:image/png;base64,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" />
                                <span>Netherlands</span>
                            </button>
                            <button
                                className={`flex flex-row items-center gap-4 bg-[#1D1F24] px-10 py-3 h-full w-full lg:w-auto hover:bg-[#393A3F] transition-all duration-300 disabled:cursor-not-allowed ${selectedLocation == "wm-uk" && 'bg-[#393A3F]'}`}
                                onClick={() => {
                                    setSelectedPlan(plans['wm-uk'][0].id)
                                    setSelectedLocation('wm-uk')
                                }}
                            >
                                <img className='h-6 w-6' src="data:image/png;base64,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" />
                                <span>West Midlands, UK</span>
                            </button>
                            <button
                                className={`flex flex-row items-center gap-4 bg-[#1D1F24] px-10 py-3 h-full w-full lg:w-auto hover:bg-[#393A3F] transition-all duration-300 disabled:cursor-not-allowed ${selectedLocation == "brisbane" && 'bg-[#393A3F]'}`}
                                onClick={() => {
                                    setSelectedPlan(plans['brisbane'][0].id)
                                    setSelectedLocation('brisbane')
                                }}
                            >
                                <img className='h-6 w-6' src="data:image/png;base64,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" />
                                <span>Brisbane, Australia</span>
                            </button>
                            <button
                                className={`flex flex-row items-center gap-4 bg-[#1D1F24] px-10 py-3 h-full w-full lg:w-auto rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl hover:bg-[#393A3F] transition-all duration-300 disabled:cursor-not-allowed ${selectedLocation == "dallas" && 'bg-[#393A3F]'}`}
                                onClick={() => {
                                    setSelectedPlan(plans['dallas'][0].id)
                                    setSelectedLocation('dallas')
                                }}
                            >
                                <img className='h-6 w-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcUlEQVR4nO3Ya0xTZxgH8MYxs5gApercBMEbikh3casoLHHyYdO46bLE6AQU3EXBTbMlhLItOfsyXWJclnjb5gQUC/UUqpyW2nJ6ozd6Ob1XBBm6IV4omuyLm2SWZ3nbHDYTt9NyjtAsPMnz4f32+7953rdvD483XdM1XawLM1x/Zs+Plg+3HtF3Huz9bfSr4N3I/D3nxwSVzdAjKoHQ+s2R4Fvv/R7Y/sFQ4NMvCf/X3+0AHH+KN9VVfZoq3Ef0Xj3QNTiWVtECaRXNIPaEodYzDGm7JJC+8xxcFhZDSFgEoYK1EFy5FoL5ayCQXwi+og0PfVU1BufhEwWTDv+sgcrbeEjXI3gfhxg8hk/bhVoyjkf9OHxgRSH481aDL08EPmExuMqq/e7Dx3ImBV9x3HYss6p1LLVCyohP39n03/jlIvAuexW8ua+AW7Q+4tgn/vaJwWssV1IPkNeGUyulgPB13hEQe8Pj+OjaE34Ej9rfPwS+vkHw9v4K7iu/ANVzHVyXr4EzNACOQD/Y/VfB5usDq7cXLJ4rYKJ6vqco6mlO8ZiEmvOxZuB+rSccxaNdR3i0pnce4cXu4Ufw6eVnE8Kb3T1gcoWgyxHsoChqFif4jwhqVjHWGaZ3Pp6xofGoE8Y7g2B0BEBn95F4KDSTdYANh/S9E8Wnl5+ZEF5v94Ou2wek1XuSFX7XcfOJ2KyPjOPpWafxdZ5wtGl8bD0cxfPLzzz2wHpyV4Fn6SpwL3kZqMUvRdu16EVwLXwBnKhzhODILgD7ggLoqtx/ZEL4mnpPblZ1WwTho7P+L/d83fjsx3Ye4dEa4flljazw9gUrwZq/JkLuEy9LOAC65yc6NjSeX9bACt+dlQ/dmSvAuLnUlxC+qskpiudHigmPmi3eNn8F2HKEoK8+UBh3gC2Hjd1M9/zfsx7D0+t/4vll9XEfWK3NC6TFDZ1mCjQmF1zqcoLK6IAOgx2UOhsotJZDceExgyFl8Sfyh0z3PD3r9M7H1ncewfNL6znCW6G90zyEx/MARK9KtmND4zNKT3OCJ0gLCgBydddqxgDoScwVHjVX+AsaE8hVBjFjgFrbjfuJ3POfe4ahzkOPTn1s7b4TC7Djp8QP7Pw8sD6/HCzPoV4G5nm5YH42F0xzl4L2tY03GAPUdA9FErnnET42+7GdR3i0Rng6ABd409wloFtZ9AdjgMw90jG2Y0PjM3ac4gzfNWcJ6HOEEcYAs3c3c4aPBuAIb5y9GIzzcoExwOXrd0ZD125DcOAWBH6+mfB7nrMDe8kIbSoDtHboQabUAa7QQks7+YAxQHDg9r1kxEsJElouqEcYAwQGboaSEn9RA81ydYAxgL9/SJ6U+AtqkMgvyZgD7K3RMP0BZ/Uwi/fAChaBQbAQDBkLQc/PAT0/G5RvvKtiHqEvvqlMRrwuPRuIbbvLGQMAhqX4izY8TDa8Jlv4J7ZuXQovnvLu3m9NJrw2bQEoSrZYePGW3X81yxEcGJ3iAwvn2lTQ1NoBZ3HFg0ZckRl3gFiI/pNJgZcpoUFKHOUlWrZQSGD19Y0kAf7uDxJiDm8iZXX3bZ9KfON5Ahqk7Vt5bMpZutc72QdWm5oFZGoWtL/+tpvHtgwYlmJ/p2xwsvEKUcktDMPYf1pEZcMwQfem7bcmC68UldyUVIkzeFxWCMdnmkv3up40nih+08/Zzj+u1Bb3NrXJOcL5gZW2h1kf2HiLJB2zOwz240qD/QEXP1INUuLoKRwX8Ca7FFpbJvpiRpCWwUTxZ2XKwTMy5cGEf2GfRGEYzEAfndB3m9YOvaxVqQvIFLp7uEI72kKQo80XNfckcrUfveclbarapjaVCMOwGVPtnq7p4v0P6i+o0E94IDCJkAAAAABJRU5ErkJggg=="></img>
                                <span>Dallas, Texas</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid gap-8 w-full'>
                    {/*// @ts-ignore */}
                    {VDSPlans[selectedLocation][selectedPlan].map((plan, index) => (
                        <div key={index} className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#1D1F24] border border-transparent hover:border-[#81ACFF] py-4 px-6 rounded-xl w-full transition-all duration-500'>
                            <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-4">
                                <span className='font-bold text-xl text-left'>{plan.name}</span>
                                <div className="flex flex-row items-center gap-2">
                                    {plan.tags}
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 items-start w-full md:w-auto'>
                                <div className='flex flex-col md:flex-row md:items-center gap-8 w-full'>
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='font-bold text-xl'>{plan.cpu.cores} CPU</span>
                                        <span className='text-sm'>Cores</span>
                                    </div>
                                    <div className="bg-white md:block hidden w-[1px] min-h-[48px] h-full" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='font-bold text-xl'>{plan.ram.quantity} GB</span>
                                        <span className='text-sm'>{plan.ram.type} RAM</span>
                                    </div>
                                    <div className="bg-white md:block hidden w-[1px] min-h-[48px] h-full" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='font-bold text-xl'>{plan.storage.quantity} GB</span>
                                        <span className='text-sm'>{plan.storage.type} SSD</span>
                                    </div>
                                    <div className="bg-white md:block hidden w-[1px] min-h-[48px] h-full" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='font-bold text-xl'>{plan.bandwidth.quantity} TB</span>
                                        <span className='text-sm'>Bandwidth @ {plan.bandwidth.speed}Gbps</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <div className='w-full lg:w-auto'>
                                    <Link href={plan.href}>
                                        <button className="bg-[#1D202B] border-[#2b4884] border-2 rounded-full px-4 py-1.5 group transition-all duration-300 flex flex-row items-center justify-center gap-1 text-[#81ACFF]">
                                            <span className="font-medium">{plan.text}</span>
                                            <svg className="mt-0.5 ml-2 -mr-1 stroke-[#81ACFF] stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                                                <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-16 py-12 text-white mx-auto container px-3'>
                <div className='flex flex-row justify-start items-center'>
                    <span className="font-medium text-6xl text-left">Deploy your VDS <br />on our premium network.</span>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='grid lg:grid-cols-3 gap-8'>
                        <div className='grid gap-8'>
                            <div className='flex flex-row items-start gap-4'>
                                <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                                </svg>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                        <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                        <span className='font-bold text-2xl'>Military-Grade Security</span>
                                    </div>
                                    <span className='text-left'>
                                        Security is paramount at HostHive. All of our datacenters offer internal and external CCTV systems, security breach alarms and is manned 24/7.                            </span>
                                </div>
                            </div>
                            <div className='flex flex-row items-start gap-4'>
                                <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                                </svg>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                        <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                        <span className='font-bold text-2xl'>BGP Sessions</span>
                                    </div>
                                    <span className='text-left'>
                                        Border Gateway Protocol manages how packets are routed across the internet through the exchange of routing information between edge routers. This feature is availabile dependant on the location. Contact us for more information.
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-row items-start gap-4'>
                                <svg className='h-[32px] min-w-[32px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4001 9.6001H9.6001V22.4001H22.4001V9.6001Z" fill="#83B5FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8001 4.8001V2.8001C14.8001 2.13736 15.3374 1.6001 16.0001 1.6001C16.6628 1.6001 17.2001 2.13736 17.2001 2.8001V4.8001H19.6001V2.8001C19.6001 2.13736 20.1374 1.6001 20.8001 1.6001C21.4628 1.6001 22.0001 2.13736 22.0001 2.8001V4.8001H22.8001C25.2301 4.8001 27.2001 6.77004 27.2001 9.2001V10.0001H29.2001C29.8628 10.0001 30.4001 10.5374 30.4001 11.2001C30.4001 11.8628 29.8628 12.4001 29.2001 12.4001H27.2001V14.8001H29.2001C29.8628 14.8001 30.4001 15.3374 30.4001 16.0001C30.4001 16.6628 29.8628 17.2001 29.2001 17.2001H27.2001V19.6001H29.2001C29.8628 19.6001 30.4001 20.1374 30.4001 20.8001C30.4001 21.4628 29.8628 22.0001 29.2001 22.0001H27.2001V22.8001C27.2001 25.2301 25.2302 27.2001 22.8001 27.2001H22.0001V29.2001C22.0001 29.8628 21.4628 30.4001 20.8001 30.4001C20.1374 30.4001 19.6001 29.8628 19.6001 29.2001V27.2001H17.2001V29.2001C17.2001 29.8628 16.6628 30.4001 16.0001 30.4001C15.3374 30.4001 14.8001 29.8628 14.8001 29.2001V27.2001H12.4001V29.2001C12.4001 29.8628 11.8628 30.4001 11.2001 30.4001C10.5374 30.4001 10.0001 29.8628 10.0001 29.2001V27.2001H9.2001C6.77005 27.2001 4.8001 25.2302 4.8001 22.8001V22.0001H2.8001C2.13736 22.0001 1.6001 21.4628 1.6001 20.8001C1.6001 20.1374 2.13736 19.6001 2.8001 19.6001H4.8001V17.2001H2.8001C2.13736 17.2001 1.6001 16.6628 1.6001 16.0001C1.6001 15.3374 2.13736 14.8001 2.8001 14.8001H4.8001V12.4001H2.8001C2.13736 12.4001 1.6001 11.8628 1.6001 11.2001C1.6001 10.5374 2.13736 10.0001 2.8001 10.0001H4.8001V9.2001C4.8001 6.77005 6.77004 4.8001 9.2001 4.8001H10.0001V2.8001C10.0001 2.13736 10.5374 1.6001 11.2001 1.6001C11.8628 1.6001 12.4001 2.13736 12.4001 2.8001V4.8001H14.8001ZM7.2001 9.2001C7.2001 8.09553 8.09553 7.2001 9.2001 7.2001H22.8001C23.9047 7.2001 24.8001 8.09553 24.8001 9.2001V22.8001C24.8001 23.9047 23.9047 24.8001 22.8001 24.8001H9.2001C8.09553 24.8001 7.2001 23.9047 7.2001 22.8001V9.2001Z" fill="#3F88F3" />
                                </svg>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row items-center gap-4 min-h-[32px]'>
                                        <div className='w-[2px] h-[15px] bg-[#3F88F3]' />
                                        <span className='font-bold text-2xl'>2Tbps+ DDoS Protection</span>
                                    </div>
                                    <span className='text-left'>
                                        We&apos;ve partnered with CosmicGuard to offer DDoS filtering implemented across our entire network that protects attacks over 2Tbps+ in size mitigating against 100s of different vectors; all done at the edge.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-2'>
                            <img src='/map-1.png' className='w-full' />
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <Link href={"https://billing.hhive.co.uk"}>
                            <button className="bg-[#1D202B] border-[#2b4884] border-2 rounded-full px-4 py-1.5 group transition-all duration-300 flex flex-row items-center justify-center gap-1 text-[#81ACFF]">
                                <span className="font-medium">Discover more about our network</span>
                                <svg className="mt-0.5 ml-2 -mr-1 stroke-[#81ACFF] stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                    <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                                    <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 py-12 text-white mx-auto container px-8'>
                <div className='text-center flex flex-col justify-center items-center gap-8 py-32'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <span className="font-medium text-6xl text-center bg-clip-text text-transparent py-3" style={{
                            backgroundImage: 'linear-gradient(159.45deg, #FFFFFF 52.14%, rgba(255, 255, 255, 0) 124.67%)'
                        }}>A wide variety of <br />supported OSs</span>
                        <span className='max-w-[50ch]'>All of our VDSs can be deployed using our plethora library of OSs including Windows, CentOS, Ubuntu, Debian, Linux-forks and many others!</span>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-8'>
                        <div className='bg-[#1D1F24] p-5 rounded-3xl'>
                            <img src="/logos/windows.png" alt="windows" />
                        </div>

                        <div className='bg-[#1D1F24] p-5 rounded-3xl'>
                            <img src="/logos/linux.png" alt="debian" />
                        </div>

                        <div className='bg-[#1D1F24] p-5 rounded-3xl'>
                            <img src="/logos/ubuntu.png" alt="ubuntu" />
                        </div>

                        <div className='bg-[#1D1F24] p-5 rounded-3xl'>
                            <img src="/logos/centos.png" alt="centos" />
                        </div>

                        <div className='bg-[#1D1F24] p-5 rounded-3xl'>
                            <img src="/logos/fedora.png" alt="fedora" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
