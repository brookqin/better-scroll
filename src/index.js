import {eventMixin} from './scroll/event'
import {initMixin} from './scroll/init'
import {coreMixin} from './scroll/core'
import {snapMixin} from './scroll/snap'
import {wheelMixin} from './scroll/wheel'
import {scrollbarMixin} from './scroll/scrollbar'
import {pullDownMixin} from './scroll/pulldown'
import {pullUpMixin} from './scroll/pullup'

import {warn} from './util/debug'

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
  if (!this.wrapper) {
    warn('can not resolve the wrapper dom')
  }

  this._init(el, options)
}

initMixin(BScroll)
coreMixin(BScroll)
eventMixin(BScroll)
snapMixin(BScroll)
wheelMixin(BScroll)
scrollbarMixin(BScroll)
pullDownMixin(BScroll)
pullUpMixin(BScroll)

BScroll.Version = '1.3.1'

export default BScroll

