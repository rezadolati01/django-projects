from kavenegar import *
from urllib.error import HTTPError


def send_sms_with_template(receptor, tokens: dict, template):
    """
        sending sms that needs template
    """
    try:
        api = KavenegarAPI(
            '2F654D4C746F7134647667484978636A45306933504F6C4F794F6A48776F484B646745354C357750527A4D3D'
        )
        params = {
            'receptor': receptor,
            'template': template,
        }
        for key, value in tokens.items():
            params[key] = value

        response = api.verify_lookup(params)
        print(response)
        return True
    except APIException as e:
        print(e)
        return False
    except HTTPError as e:
        print(e)
        return False


def send_sms_normal(receptor, message):
    try:
        api = KavenegarAPI(
            '2F654D4C746F7134647667484978636A45306933504F6C4F794F6A48776F484B646745354C357750527A4D3D')
        params_buyer = {
            'receptor': receptor,
            'message': message,
            'sender': '10005000505077'
        }
        response = api.sms_send(params_buyer)
        print(response)
    except APIException as e:
        print(e)
    except HTTPError as e:
        print(e)
