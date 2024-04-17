from django import forms


class PhoneVerificationForm(forms.Form):
    phone = forms.CharField(max_length=11, label='شماره تلفن')


