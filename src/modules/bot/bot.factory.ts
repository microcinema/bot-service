import { Telegraf, session } from 'telegraf'

import { CONFIG } from '@/config'
import { registerBotHandlers } from '@/modules/bot/handlers'
import type { Session, TelegrafContext } from '@/shared/interfaces'

export function createBot() {
	const bot = new Telegraf<TelegrafContext>(CONFIG.BOT_TOKEN)

	bot.use(
		session({
			defaultSession: (): Session => ({
				id: undefined
			})
		})
	)

	registerBotHandlers(bot)

	return bot
}
