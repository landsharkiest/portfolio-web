/**
 * Tech stack icons - Python, PyTorch, AWS, Java, Lua, Supabase
 */

const TECH_STACK = [
  { key: 'python', label: 'Python' },
  { key: 'pytorch', label: 'PyTorch' },
  { key: 'aws', label: 'AWS' },
  { key: 'java', label: 'Java' },
  { key: 'lua', label: 'Lua' },
  { key: 'supabase', label: 'Supabase' },
] as const

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#python-a)">
        <path
          fill="url(#python-b)"
          d="M49.6 0C24.3 0 25.8 11 25.8 11v11.4H50v3.4H16.2S0 24 0 49.6s14.2 24.7 14.2 24.7h8.5V62.4s-.5-14.2 14-14.2h24s13.5.2 13.5-13V13.3c-.1 0 2-13.3-24.6-13.3M36.3 7.7c.6 0 1.1.1 1.7.3.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3-1.1-.1-1.7-.3-1-.5-1.4-.9-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3"
        />
        <path
          fill="url(#python-c)"
          d="M50.4 99.5c25.4 0 23.8-11 23.8-11V77.1H49.9v-3.4h33.8s16.2 1.8 16.2-23.8-14.2-24.7-14.2-24.7h-8.5V37s.5 14.2-14 14.2h-24s-13.5-.2-13.5 13v21.9c.2.1-1.9 13.4 24.7 13.4m13.3-7.7c-.6 0-1.1-.1-1.7-.3-.5-.2-1-.5-1.4-.9s-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3 1.1.1 1.7.3c.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3"
        />
      </g>
      <defs>
        <linearGradient
          id="python-b"
          x1="9.308"
          x2="58.865"
          y1="9.253"
          y2="58.316"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6f6f6f" />
          <stop offset="1" stopColor="#5e5e5e" />
        </linearGradient>
        <linearGradient
          id="python-c"
          x1="39.745"
          x2="92.964"
          y1="40.752"
          y2="91.061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#dadada" />
          <stop offset="1" stopColor="#c5c5c5" />
        </linearGradient>
        <clipPath id="python-a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function PyTorchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path
        fill="#797979"
        d="m75.5 31.8-6.6 6.6c10.8 10.8 10.8 28.2 0 38.8C58.1 88 40.7 88 30.1 77.2c-10.8-10.8-10.8-28.2 0-38.8l17.1-17.1 2.4-2.4V6L23.8 31.8c-14.4 14.4-14.4 37.6 0 52s37.6 14.4 51.7 0c14.4-14.5 14.4-37.6 0-52"
      />
      <path
        fill="#797979"
        d="M62.6 30.2c2.7 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8-4.8 2.1-4.8 4.8 2.1 4.8 4.8 4.8"
      />
    </svg>
  )
}

function AwsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#aws-a)">
        <path
          fill="#2e2e2e"
          d="M28.2 41.7c0 1.2.1 2.2.4 3 .3.7.6 1.5 1.1 2.4.2.3.2.5.2.8s-.2.7-.6 1l-2.1 1.4q-.45.3-.9.3c-.3 0-.7-.2-1-.5-.5-.5-.9-1-1.2-1.6s-.7-1.2-1-2c-2.6 3.1-5.9 4.6-9.8 4.6-2.8 0-5-.8-6.7-2.4C5 47.1 4.1 45 4.1 42.3q0-4.2 3-6.9c2-1.7 4.7-2.6 8.1-2.6 1.1 0 2.3.1 3.5.3s2.5.4 3.8.7v-2.4c0-2.5-.5-4.3-1.6-5.3q-1.65-1.5-5.4-1.5c-1.2 0-2.4.1-3.6.4s-2.4.7-3.6 1.1c-.5.2-.9.4-1.2.4-.2.1-.4.1-.5.1-.5 0-.7-.3-.7-1V24c0-.5.1-.9.2-1.2.2-.2.5-.5.9-.7q1.8-.9 4.2-1.5c1.6-.4 3.4-.6 5.2-.6q6 0 8.7 2.7c1.8 1.8 2.8 4.5 2.8 8.2zm-13.5 5.1c1.1 0 2.2-.2 3.4-.6s2.3-1.1 3.2-2.1c.5-.6.9-1.3 1.1-2.1s.3-1.8.3-2.9v-1.4c-1-.2-2-.4-3.1-.6-1.1-.1-2.1-.2-3.1-.2-2.2 0-3.9.4-5 1.3-1 .9-1.5 2.2-1.5 3.8s.4 2.7 1.2 3.5c.8.9 1.9 1.3 3.5 1.3m26.7 3.6c-.6 0-1-.1-1.3-.3s-.5-.7-.7-1.3L31.6 23c-.2-.7-.3-1.1-.3-1.3 0-.5.3-.8.8-.8h3.3c.6 0 1.1.1 1.3.3.3.2.5.7.7 1.3l5.6 22 5.2-22c.2-.7.4-1.1.6-1.3.3-.2.7-.3 1.3-.3h2.7c.6 0 1.1.1 1.3.3.3.2.5.7.6 1.3L60 44.8l5.8-22.3c.2-.7.4-1.1.7-1.3s.7-.3 1.3-.3h3.1c.5 0 .8.3.8.8 0 .2 0 .3-.1.5 0 .2-.1.5-.2.8l-8 25.7c-.2.7-.4 1.1-.7 1.3s-.7.3-1.3.3h-2.9c-.6 0-1.1-.1-1.3-.3-.3-.2-.5-.7-.6-1.3l-5.2-21.5-5.1 21.4c-.2.7-.4 1.1-.6 1.3-.3.2-.7.3-1.3.3h-3zm42.7.9c-1.7 0-3.5-.2-5.1-.6-1.7-.4-3-.8-3.8-1.3-.5-.3-.9-.6-1-.9s-.2-.6-.2-.9v-1.7c0-.7.3-1 .8-1 .2 0 .4 0 .6.1s.5.2.8.3c1.1.5 2.4.9 3.7 1.2s2.6.4 4 .4c2.1 0 3.7-.4 4.9-1.1s1.7-1.8 1.7-3.2c0-.9-.3-1.7-.9-2.3s-1.7-1.2-3.4-1.7l-4.8-1.5c-2.4-.8-4.2-1.9-5.3-3.4s-1.7-3.1-1.7-4.8c0-1.4.3-2.6.9-3.7q.9-1.65 2.4-2.7c1-.8 2.1-1.3 3.5-1.7q1.95-.6 4.2-.6c.7 0 1.5 0 2.2.1.8.1 1.5.2 2.2.4s1.3.3 1.9.5 1.1.4 1.4.6c.5.3.8.5 1 .8s.3.6.3 1.1v1.6c0 .7-.3 1.1-.8 1.1-.3 0-.7-.1-1.3-.4-1.9-.9-4-1.3-6.4-1.3-1.9 0-3.4.3-4.4.9s-1.6 1.6-1.6 3c0 .9.3 1.7 1 2.4.7.6 1.9 1.3 3.7 1.8l4.7 1.5c2.4.8 4.1 1.8 5.2 3.2 1 1.4 1.5 2.9 1.5 4.7q0 2.1-.9 3.9c-.6 1.1-1.4 2.1-2.4 2.9s-2.3 1.4-3.7 1.9c-1.6.1-3.2.4-4.9.4"
        />
        <path
          fill="#a7a7a7"
          fillRule="evenodd"
          d="M90.4 67.4c-10.9 8.1-26.8 12.4-40.5 12.4-19.2 0-36.4-7.1-49.5-18.9-1-.9-.1-2.2 1.1-1.5C15.6 67.6 33 72.5 51 72.5c12.1 0 25.5-2.5 37.7-7.7 1.9-.7 3.5 1.3 1.7 2.6"
          clipRule="evenodd"
        />
        <path
          fill="#a7a7a7"
          fillRule="evenodd"
          d="M95 62.2c-1.4-1.8-9.2-.9-12.8-.4-1.1.1-1.2-.8-.3-1.5 6.3-4.4 16.5-3.1 17.7-1.7 1.2 1.5-.3 11.8-6.2 16.7-.9.8-1.8.4-1.4-.6 1.4-3.3 4.4-10.7 3-12.5"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="aws-a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function JavaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#java-a)">
        <path
          fill="#777"
          d="M36.8 77.3s-3.8 2.2 2.7 3c7.9.9 12 .8 20.7-.9 0 0 2.3 1.4 5.5 2.7-19.6 8.4-44.3-.5-28.9-4.8m-2.4-10.9s-4.3 3.2 2.3 3.8c8.5.9 15.1.9 26.7-1.3 0 0 1.6 1.6 4.1 2.5-23.7 7-50.1.6-33.1-5"
        />
        <path
          fill="#878787"
          d="M54.5 47.8c4.8 5.6-1.3 10.6-1.3 10.6s12.2-6.3 6.6-14.2c-5.3-7.4-9.3-11.1 12.5-23.7.1-.1-34.1 8.5-17.8 27.3"
        />
        <path
          fill="#777"
          d="M80.4 85.4s2.8 2.3-3.1 4.1c-11.3 3.4-47 4.5-57 .1-3.6-1.6 3.1-3.7 5.2-4.2 2.2-.5 3.4-.4 3.4-.4-4-2.8-25.6 5.5-11 7.9 40 6.6 72.9-2.8 62.5-7.5M38.6 55s-18.2 4.3-6.4 5.9c5 .7 14.8.5 24-.3 7.5-.6 15.1-2 15.1-2s-2.7 1.1-4.6 2.4c-18.5 4.9-54.1 2.6-43.8-2.4 8.6-4 15.7-3.6 15.7-3.6m32.6 18.3c18.8-9.7 10.1-19.1 4-17.9-1.5.3-2.1.6-2.1.6s.6-.9 1.6-1.2c12-4.2 21.2 12.4-3.9 19 0 0 .3-.3.4-.5"
        />
        <path
          fill="#878787"
          d="M59.9 0S70.3 10.4 50 26.4c-16.2 12.8-3.7 20.1 0 28.5-9.5-8.5-16.4-16.1-11.8-23.1C45.1 21.5 64.1 16.5 59.9 0"
        />
        <path
          fill="#777"
          d="M40.4 99.7c18 1.2 45.7-.6 46.3-9.2 0 0-1.3 3.2-14.9 5.8-15.4 2.9-34.3 2.6-45.6.7.1 0 2.4 1.9 14.2 2.7"
        />
      </g>
      <defs>
        <clipPath id="java-a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function LuaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#lua-a)">
        <path
          stroke="gray"
          strokeDasharray="4.25 4.25"
          strokeWidth="1.131"
          d="M93.2 27.6c5.4 10.5 6.7 22.7 3.8 34.1s-9.9 21.5-19.6 28.2-21.6 9.6-33.3 8.2-22.6-7-30.5-15.8C5.6 73.6 1.2 62.2 1 50.4s4-23.3 11.7-32.3S31 3.2 42.7 1.5s23.6.9 33.5 7.4"
        />
        <path
          fill="#0e0e0e"
          d="M49.7 87.4c20.8 0 37.7-16.9 37.7-37.7S70.6 12 49.7 12 12 28.9 12 49.7s16.9 37.7 37.7 37.7"
        />
        <path
          fill="#fff"
          d="M65.4 45.2c6.1 0 11-4.9 11-11s-4.9-11-11-11-11 4.9-11 11c-.1 6 4.9 11 11 11"
        />
        <path
          fill="#0e0e0e"
          d="M87.4 23.1c6.1 0 11-4.9 11-11s-4.9-11-11-11-11 4.9-11 11c0 6 4.9 11 11 11"
        />
        <path
          fill="#fff"
          d="M39.5 68.6v-2.8H27.3v-22h-3.2v24.7h15.4zm17 0V50.8h-2.8v9.8c0 3.6-1.9 6-4.9 6-2.2 0-3.7-1.4-3.7-3.5V50.8h-2.8v13.4c0 3 2.2 4.9 5.7 4.9 2.6 0 4.3-.9 5.9-3.3v2.7h2.6zm20.7-.1v-2.1c-.3.1-.4.1-.6.1-1 0-1.5-.5-1.5-1.4v-9.9c0-3.2-2.3-4.9-6.7-4.9-4.3 0-7 1.7-7.1 5.8h2.8c.2-2.2 1.5-3.2 4.2-3.2 2.5 0 4 1 4 2.6v.7c0 1.2-.7 1.7-3 2-4 .5-4.6.6-5.7 1.1-2.1.8-3.1 2.4-3.1 4.6 0 3.2 2.2 5.1 5.8 5.1 2.3 0 4.5-.9 6-2.6.3 1.4 1.5 2.3 2.9 2.3.6.1 1 .1 2-.2m-5-6.1c0 2.5-2.6 4.2-5.3 4.2-2.2 0-3.5-.8-3.5-2.7s1.3-2.7 4.3-3.1 3.6-.5 4.5-1z"
        />
      </g>
      <defs>
        <clipPath id="lua-a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function SupabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path
        fill="url(#supabase-a)"
        d="M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z"
      />
      <path
        fill="url(#supabase-b)"
        fillOpacity=".2"
        d="M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z"
      />
      <path
        fill="#9c9c9c"
        d="M41.5 1.7c2.6-3.2 7.7-1.5 7.8 2.7l.4 60.1H9.8C2.5 64.5-1.6 56 3 50.3z"
      />
      <defs>
        <linearGradient
          id="supabase-a"
          x1="45.952"
          x2="81.857"
          y1="56.664"
          y2="71.723"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6c6c6c" />
          <stop offset="1" stopColor="#9c9c9c" />
        </linearGradient>
        <linearGradient
          id="supabase-b"
          x1="47.672"
          x2="64.047"
          y1="19.483"
          y2="50.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

const ICON_MAP = {
  python: PythonIcon,
  pytorch: PyTorchIcon,
  aws: AwsIcon,
  java: JavaIcon,
  lua: LuaIcon,
  supabase: SupabaseIcon,
} as const

export function TechIcons() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {TECH_STACK.map(({ key, label }) => {
        const Icon = ICON_MAP[key]
        return (
          <div
            key={key}
            className="flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition-colors"
            title={label}
          >
            <Icon className="h-12 w-12" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
