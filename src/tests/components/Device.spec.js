/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import Nextcloud from '../../mixins/Nextcloud.js'

import Device from '../../components/Device.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.mixin(Nextcloud)

describe('Device', () => {
	let actions
	let store

	beforeEach(() => {
		actions = {}
		store = new Vuex.Store({
			state: {
				devices: [],
			},
			actions,
		})
	})

	it('renders devices without a name', () => {
		store.state.devices.push({
			id: 'k1',
			name: undefined,
		})
		const device = shallowMount(Device, {
			store,
			localVue,
		})

		expect(device.text()).to.have.string('Unnamed key')
	})
})
