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
import {colors, fonts, responsiveWidth} from '../../utils';
import {IlustrasiRegister2} from '../../assets';
import {Inputan, Jarak, Pilihan, Tombol} from '../../components';
import { register } from '../../api';

export default class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: props.route.params.nama,
      email: props.route.params.email,
      password: props.route.params.password,
      nohp: props.route.params.nomorHp,
      alamat : '',
    };
  }
  handleAlamatChange = (val) => {
    this.setState({
      alamat: val,
    });
  };
  componentDidMount() {
    console.log('nama: ', this.state.nama);
    console.log('email: ', this.state.email);
    console.log('password: ', this.state.password);
    console.log('nomorHp: ', this.state.nohp);
  };
  async tryRegister(){
    const { navigation } = this.props;
    const res = await register(this.state);
    if (res) {
      navigation.replace('MainApp');
    }
  }
  render() {
    const {dataKota, dataProvinsi} = this.state;
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
              <IlustrasiRegister2 />
              <Jarak height={5} />
              <Text style={styles.title}>Isi Alamat</Text>
              <Text style={styles.title}>Lengkap Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circleDisabled}></View>
                <Jarak width={10} />
                <View style={styles.circlePrimary}></View>
              </View>
            </View>

            <View style={styles.card}>
              <Inputan label="Alamat" onChangeText={this.handleAlamatChange} textarea />
              <Jarak height={25} />
              <Tombol
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={async () => await this.tryRegister()}
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
