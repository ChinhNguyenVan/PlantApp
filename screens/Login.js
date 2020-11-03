import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../constants";
import { Button, Block, Text, Input } from "../components";

const VALID_EMAIL = "kriss@kriss.com";
const VALID_PASSWORD = "12345";

export default class Login extends React.Component {
  static navigationOptions = {};

  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
  };
  render() {
    return (
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={styles.input}
            defaultValue={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <Input
            secure
            label="Password"
            style={styles.input}
            defaultValue={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
