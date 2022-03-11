import React from 'react';
import {
    ImageSourcePropType,
    Image,
    View,
    Text
} from 'react-native';
import stylesheet from './stylesheet';

interface IUserInfoProps {
    logo?: string | ImageSourcePropType;
    userType?: string;
    userName: string;
};

const UserInfo = ({
    userType,
    userName,
    logo
}: IUserInfoProps) => {
    const renderUserType = () => {
        return <Text
            style={[
                stylesheet.userType,
                {
                    marginLeft: logo ? 0 : 10
                }
            ]}
        >
            {userType}
        </Text>;
    };

    const renderLogo = () => {
        if(typeof logo === "string") {
            return <Image
                resizeMode="contain"
                source={{
                    uri: logo
                }}
                style={[
                    stylesheet.logo
                ]}
            />;
        }

        return <Image
            resizeMode="contain"
            source={logo}
            style={[
                stylesheet.logo
            ]}
        />;
    };

    return <View
        style={[
            stylesheet.container
        ]}
    >
        <View
            style={[
                stylesheet.content
            ]}
        >
            <Image
                source={{
                    uri: "https://icdn.ensonhaber.com/resimler/diger/michael-jackson_6883.jpg"
                }}
                style={[
                    stylesheet.profile
                ]}
            />
            <View
                style={[
                    stylesheet.title
                ]}
            >
                <Text
                    style={[
                        stylesheet.welcome
                    ]}
                >
                    Welcome, <Text style={[
                        stylesheet.userName
                    ]}>{userName}</Text>
                </Text>
                {
                    logo ?
                        renderUserType()
                        :
                        null
                }
            </View>
        </View>
        {
            logo ?
                renderLogo()
                :
                renderUserType()
        }
    </View>;
};
export default UserInfo;
