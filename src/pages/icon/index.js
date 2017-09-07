import React, { Component } from 'react'
import { Navbar, ContentBlock, List, Icon, Badge, Button, Rate, Page } from 'components'
import styles from './index.less'

const { Element, Item } = List
const Title = ContentBlock.Title

export default class IconPage extends Component {
  render() {
    return (
      <Page className={styles.home}>
        <Navbar type="secondary" >
          Icon
        </Navbar>
        <Title>Default</Title>
        <List>
          <Item media={<Icon type="star" />}>
            <Element type="title">Ivan Petrov</Element>
            <Element type="after">
              <Badge color="primary">New</Badge>
            </Element>
          </Item>
          <Item
            link="/"
            media={<Icon type="send" />}
          >
            <Element type="title">Ivan Petrov</Element>
            <Element type="after">
              CEO
            </Element>
          </Item>
        </List>
        <Title>Icon</Title>
        <List>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png" circle />}>
            <Element type="title">
              移动网络
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png" circle />}>
            <Element type="title">
                WLAN
            </Element>
            <Element type="after">
                XIAOMI-wifi
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png" circle />}>
            <Element type="title">
              蓝牙
            </Element>
            <Element type="after">
             已开启
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png" circle />}>
            <Element type="title">
              其他连接方式
            </Element>
          </Item>
        </List>
        <Title>Without Icon</Title>
        <List>
          <Item link>
            <Element type="title">
              蓝牙
            </Element>
          </Item>
          <Item link>
            <Element type="title">
              其他连接方式
            </Element>
          </Item>
        </List>
        <Title>Middle Icon</Title>
        <List media>
          <Item media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="70" />}>
            <Element type="title">
            微信
            </Element>
            <Element type="title-row">
              <Element type="text">
              一个进程和2个服务
              </Element>
              <Element type="after">
               20MB 11:01:38
              </Element>
            </Element>
          </Item>
          <Item media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png" radius size="70" />}>
            <Element type="title">
              QQ
            </Element>
            <Element type="title-row">
              <Element type="text">
                一个进程和2个服务
              </Element>
              <Element type="after">
                20MB 11:01:38
              </Element>
            </Element>
          </Item>
          <Item media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="70" />}>
            <Element type="title">
              微博
            </Element>
            <Element type="title-row">
              <Element type="text">
                一个进程和2个服务
              </Element>
              <Element type="after">
                20MB 11:01:38
              </Element>
            </Element>
          </Item>
          <Item media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="70" />}>
            <Element type="title">
              音乐
            </Element>
            <Element type="title-row">
              <Element type="text">
                一个进程和2个服务
              </Element>
              <Element type="after">
                20MB 11:01:38
              </Element>
            </Element>
          </Item>
        </List>
        <Title>Large Icon</Title>
        <List media>
          <Item
            extra={<Button small>打开</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="104" />}
          >
            <Element type="title">
              微信
            </Element>
            <Element type="text">
              <Rate small value="4" /><span>社交聊天</span><span className={styles.split}>|</span><span className={styles.marginRight}>46.9M</span><Badge small>广告</Badge>
            </Element>
            <Element type="text">
                奥莱购-品牌直销的线上奥莱
            </Element>
          </Item>
          <Item
            extra={<Button small color="green">安装</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.taobao.taobao.png" radius size="104" />}
          >
            <Element type="title">
              手机淘宝
            </Element>
            <Element type="text">
              <Rate small value="3" />
            </Element>
            <Element type="text">
              时尚购物 48.9M
            </Element>
          </Item>
          <Item
            extra={<Button slot="extra" small color="green">下载</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                微博
              </div>
            </div>
            <div className="item-text">
              <Rate value="4" small />
            </div>
            <div className="item-text">
             社交聊天 52.1M
            </div>
          </Item>
          <Item
            extra={<Button small>打开</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                音乐
              </div>
            </div>
            <div className="item-text">
              <Rate value="4" small />
            </div>
            <div className="item-text">
             影音视听 10.9M
            </div>
          </Item>
        </List>
      </Page>
    )
  }
}
