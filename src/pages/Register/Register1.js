import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {IlustrasiRegister1} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';

export default class Register1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      email: '',
      password: '',
      nomorHp: '',
    };
  }

  handleEmailChange = (val) => {
    this.setState({
      email: val,
    });
  };
  handleNameChange = (val) => {
    this.setState({
      nama: val,
    });
  };
  handlePasswordChange = (val) => {
    this.setState({
      password: val,
    });
  };
  handleNomorHpChange = (val) => {
    this.setState({
      nomorHp: val,
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Tombol
                icon="arrow-left"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            <View style={styles.ilustrasi}>
              <IlustrasiRegister1 />
              <Jarak height={5} />
              <Text style={styles.title}>Daftar</Text>
              <Text style={styles.title}>Isi Daftar Diri Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Jarak width={10} />
                <View style={styles.circleDisabled}></View>
              </View>
            </View>

            <View style={styles.card}>
              <Inputan label="Nama" onChangeText={this.handleNameChange}/>
              <Inputan label="Email" onChangeText={this.handleEmailChange}/>
              <Inputan label="No. Handphone" onChangeText={this.handleNomorHpChange} keyboardType="number-pad" />
              <Inputan label="Password" onChangeText={this.handlePasswordChange} secureTextEntry />
              <Jarak height={25} />
              <Tombol
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={() =>
                  this.props.navigation.navigate('Register2', {
                    nama: this.state.nama,
                    email: this.state.email,
                    password: this.state.password,
                    nomorHp: this.state.nomorHp,
                  })
                }
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 30,
    position: 'absolute',
  },
});
