/**
 * @flow
 */

import React, { Component } from 'react';
import {
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
} from "react-native";
import { BookletListView } from "./components/BookletListView";

const tabIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABqlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIzHG2AAAAjXRSTlMAAQIDBAUGBwgJCgsMDg8QERITFBUXGBkaGx4gIiMlJicqKywtLi8wMjM0ODk6PD9AQkVGR0lKTU5PUFFSVFVWV1hZXV5fYWNmaGtsc3h5e3x+f4CDhYmLjI6RkpSYmpudnqCjpaatsrW3ury+wMHDxcfIyszOz9HT1dfZ2tze4OLm6Onr7e/x8/X5+/3WLLbhAAACM0lEQVQYGd3B+V9MURzH4c8dTZJiyJI1RJYh+96ibCFEZM2SLdm3REJqRPX+nx3TPbfSoa/fvDyP/h0V/Xwd4E+eVOo3yjGoVdgjLDIKWYzJCYVcweSmAjLYXNBUqRfYbNVU5zEq1lQYvVLAG2LnIgXdJq9BATlihQrrIq9MUqTJZhO7p7BZ5PXLqTuqSfYR26OwRvKa5ZzlqCbqJtbdUB/Sypjlcj4zkta4ZdgMR5LmASs1rhObq3JqgTVKHMRoo5xnQEZeNVZpSUXAgBI5vNaUgq6Q90BONXBaiR68QoV1krdTTgdQocQHYncUNpsxJZJSozCSkpfGa1RYC3k9clYDN5TI4o10PQzpY8wROa1AVokHGC2U8xWYKS+D0aCccuCxEm0YnZFzHDggbwFWFXLeAxnFZvRiNJKSVAp8lJfFql3OHuCkvPVYZeV0Akvl7caqUFIa+B7Ju4tRl5xNwCV5hVjtlXMNqJK3C6s5kqJhoEBeH0a9cpYD9+VVYdUkpxnYoVj0DqtyOf1AiWLHsBqSUwa8VawMs/NyDgFHFDuI2Qo5L4GFilVhNRhJKgZy8rJYHZazDWiR14DRtwI594BV8tqxGV0rZwYwmpI3gMHg41Nz9VMlcEuJYWCdrC4CW5R4DkQyioaAIiWagEUyWgI81bi5QGdKNteBGk1wGejeXBRpWqVtOKWaIP2Jv9GhSTI57AZnabKS11h9ma9fRTU5TNrSCoiWbq+rn8b+DUX6L/wAKw9CZwLup64AAAAASUVORK5CYII=";

export class BookletTab extends Component {
  render() {
    const {selected, onPress} = this.props;
    return (
      <TabBarIOS.Item
        title="崇拜週刊"
        icon={{uri: tabIcon, scale: 3}}
        selected={selected}
        onPress={onPress}
      >
        <NavigatorIOS
          initialRoute={{
            component: BookletListView,
            title: '崇拜週刊',
          }}
          style={{flex: 1}}
        />
      </TabBarIOS.Item>
    );
  }
};
