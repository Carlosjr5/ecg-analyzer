import React from 'react'
import { motion } from 'framer-motion'

const RedSmallECG = () => {
    return (
        <motion.svg
            className="absolute top-0 right-0"
            width="140"
            height="83"
            viewBox="0 0 140 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <motion.path
                animate={{ pathLength: [0, 1], opacity: [1, 0.8, 0] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                strokeWidth={2}
                strokeDasharray="0 1"
                fill="none"
                d="M2 48.9508H25.9022C26.6538 48.9508 27.3419 48.5294 27.6836 47.86L33.3304 36.7957C34.1209 35.2469 36.3748 35.375 36.9848 37.0034L42.6762 52.198C43.3988 54.1273 46.2141 53.8358 46.526 51.7993L53.882 3.78135C54.2321 1.49658 57.5349 1.52806 57.8413 3.81909L67.909 79.1006C68.2186 81.4154 71.5676 81.4131 71.8741 79.0979L76.018 47.791C76.2979 45.6764 79.2514 45.4104 79.9046 47.441L80.5429 49.4249C81.1901 51.4368 84.1095 51.2003 84.4244 49.1104L89.3696 16.297C89.6995 14.1081 92.8141 13.9973 93.2987 16.1572L99.5045 43.816C99.9684 45.8836 102.907 45.9047 103.401 43.8441L106.407 31.2964C106.879 29.3253 109.646 29.2261 110.258 31.1583L113.874 42.5713C114.138 43.4024 114.909 43.9672 115.781 43.9672H138" stroke="#EA384E" strokeOpacity="0.5" strokeLinecap="round"
            />

        </motion.svg>
    )
}

export default RedSmallECG