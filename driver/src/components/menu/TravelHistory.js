/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class TravelHistory extends Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        marginRight: 10,
                        height: 50,
                    }}>
                <View
                    style={{
                        height: 45,
                        width: 45,
                        backgroundColor: 'grey',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{
                            resizeMode: 'center',
                            height: 40,
                            width: 40,
                            borderRadius: 100,
                        }}
                        source={require('../../assets/images/profile.jpg')}

                    />
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        Pedro Penduko
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        05/3/21 11:05 AM
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        Cancelled
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        Earning
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        ₱ 0.00
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        ₱ 0.00
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginRight: 10,
                    height: 50,

                }}>
                <View
                    style={{
                        height: 45,
                        width: 45,
                        backgroundColor: 'grey',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{
                            resizeMode: 'center',
                            height: 40,
                            width: 40,
                            borderRadius: 100,
                        }}
                        source={require('../../assets/images/profile.jpg')}

                    />
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        Pedro Penduko
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        05/3/21 11:05 AM
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        {''}
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                        }}>
                        Earning
                    </Text>
                </View>
                <View
                    style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        ₱ 0.00
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        ₱ 0.00
                    </Text>
                </View>
            </View>
        </View>


        );
    }
}

