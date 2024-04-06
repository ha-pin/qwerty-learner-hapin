import InfoPanel from '@/components/InfoPanel'
import { infoPanelStateAtom } from '@/store'
import type { InfoPanelType } from '@/typings'
import { recordOpenInfoPanelAction } from '@/utils'
import { useAtom } from 'jotai'
import type React from 'react'
import { useCallback } from 'react'
import IconGithub from '~icons/simple-icons/github'

const Footer: React.FC = () => {
  const [infoPanelState, setInfoPanelState] = useAtom(infoPanelStateAtom)

  const handleOpenInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      recordOpenInfoPanelAction(modalType, 'footer')
      setInfoPanelState((state) => ({ ...state, [modalType]: true }))
    },
    [setInfoPanelState],
  )

  const handleCloseInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      setInfoPanelState((state) => ({ ...state, [modalType]: false }))
    },
    [setInfoPanelState],
  )

  return (
    <>
      <InfoPanel
        openState={infoPanelState.hapin}
        title="关于哈拼"
        icon={IconGithub}
        buttonClassName="bg-red-500 hover:bg-red-400"
        iconClassName="text-red-500 bg-red-100 dark:text-red-600 dark:bg-red-500"
        onClose={() => handleCloseInfoPanel('hapin')}
      >
        <p className="text-sm text-gray-500  dark:text-gray-400">
          Qwerty Learner(Hapin for Kazakh) 是一个基于哈拼和 Qwerty Learner
          二次开发的开源项目，旨在为哈萨克语用户提供高质量、可靠的打字练习工具。
          <br />
          <br />
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          你可以通过
          <a href="https://hapin.js.org" className="mx-2 underline">
            哈拼官网
          </a>
          了解一下哈拼。
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          或者，访问
          <a href="https://github.com/ha-pin" className="mx-2 underline">
            GitHub
          </a>
          进行了解。
        </p>
      </InfoPanel>

      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/ha-pin" target="_blank" rel="noopener noreferrer" aria-label="前往 GitHub 项目主页">
          <IconGithub fontSize={15} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
        </a>

        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('hapin')
            e.currentTarget.blur()
          }}
        >
          @ Hapin
        </button>
        <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          本项目基于 <a href="https://qwerty.kaiyi.cool/">Qwerty Learner</a> 进行二次开发为适配哈萨克语更好工作
        </span>
        <span className="select-none rounded bg-slate-200 px-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          Build <span className="select-all">{LATEST_COMMIT_HASH}</span>
        </span>
      </footer>
    </>
  )
}

export default Footer
