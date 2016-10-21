/**
 * @flow
 */

import React, { Component } from 'react';
import {
  TabBarIOS,
  NavigatorIOS,
  Text
} from 'react-native';
import { RecordListView } from "./components/RecordListView"

const tabIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABuVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxWxgFAAAAknRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGhwdHh8gISIlJikqLC0uLzAxNDU2Nzg6PT5AQkNERkdKS0xNTk9QUVJUVVZXWFldXl9jZGdsbW9wdHV3eHt+g4aJjo+UlZeYmp2eoKOmqKqrra+wtLW3uby+wMPFx8jKzs/R09XX2drc3uDi5Ojp6+3v8fP19/n7/f4wgzwAAAJ+SURBVBgZ7cH7X0txHAfg91lUE1bNbVG0XMo1t9zrS8glt9wiRIQktIjkkiK1Nm3vv9g537PtfFZn29mLH3seLPkvfKGW6/2fpuKxH6NPrhxYY8CzFcfeMluiv3k5PDAa39FVXx0KMI78ZE5jTcincYJ5jWxELqV9LOi2D67CUWZL/vo4Ns0FJoJwcZpC7N6+dSXQlocOPknQMb8Ti3TR8WCTgSy+hgE6jmKBm8y45oeL6h5mHEOW80x7vho51IwyrRHCNqYkDiCPy0yZDyKjPE7b92rkVR+l7ZsPaS9oGy9DAcFZ2rqQspe28VIUVDVL23poxhS1+Cp4sIW2IWjHadsBT87SFoblJ7X78ChC7RVMW6nFy+DRetoCAHqpdcCzHmoXASNBrRyehaiNAbXUelGEz9T8OEmtGUXopBbGPWoBFCFMrQ0RaiiGn9pdTNAyi2KUUHuIOC0fURRqA4jRMgpH5evIcDukwGBkuB0CtZeYpGUCjjMkk5BaSSbhMKj1YpSWJFJKNh9+SRMkRdOJXZVIKafWjcfUymApvZOgDZKi7es+aCFqF9BJrRamut9Mg6SY9mwZTC3U9qCZ2jkA2+mApJgxWQrgEbUNqKL2fqVREaMDkqLjNXzBP7QkfUCMtmSUAiRFYYYpgwB66AaSoptWAA10A0nRTQUAI0YXkBRdvIHlBl1AUnSxG5bVX7gYJMVFksMGbL6qpktPZyhBUpTG77eGK5AtSAmSovAJbkYoQFIU9sNNiAIkRccHuDtDByTFjGk/cjjFDEiKaWMrkNPaIaZAUrTNdRjIJ3Do6nuaICmabnXU+1BQO02Q2miCJzVzZDekUJTsxpJ/9hcchZ9wtD5slwAAAABJRU5ErkJggg==";

export class RecordTab extends Component {
  render() {
    const {selected, onPress} = this.props;
    return (
      <TabBarIOS.Item
        title="講道重溫"
        icon={{uri: tabIcon, scale: 3}}
        selected={selected}
        onPress={onPress}
      >
        <NavigatorIOS
          initialRoute={{
            component: RecordListView,
            title: '講道重溫',
          }}
          style={{flex: 1}}
        />
      </TabBarIOS.Item>
    );
  }
};
