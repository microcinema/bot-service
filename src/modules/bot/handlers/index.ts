import { Telegraf } from 'telegraf'

import { registerContactHandler } from '@/modules/bot/handlers/contact.handler'
import { registerStartHandler } from '@/modules/bot/handlers/start.handler'
import type { TelegrafContext } from '@/shared/interfaces'

export function registerBotHandlers(bot: Telegraf<TelegrafContext>) {
	registerStartHandler(bot)
	registerContactHandler(bot)
}
