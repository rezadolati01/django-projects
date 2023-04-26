from django import forms
from .models import Comment
import re
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User




class EmailAdminForm(forms.Form):
    name=forms.CharField(max_length=25)
    email=forms.EmailField()
    # to=forms.EmailField
    message=forms.CharField(required=False,widget=forms.Textarea)
#---------------------------------------------------------------
class CommentForm(forms.ModelForm):
    class Meta:
        model=Comment
        fields=('body',)
        # fields=('name','email','body')

class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'password1', 'password2')

    def clean_username(self):
        username = self.cleaned_data['username']
        try:
            User.objects.get(username=username)
            raise forms.ValidationError("این نام کاربری قبلا ثبت شده است")
        except User.DoesNotExist:
            return username

    def clean_password1(self):
        # cleaned_data = super(SignUpForm, self).clean()
        password = self.cleaned_data['password1']
        if len(password) < 8:
            raise forms.ValidationError('رمز عبور شما باید بیشتر از 8 کاراکتر باشد')
        if not re.findall('[a-z]', password):
            raise forms.ValidationError('رمز عبور شما باید حداقل حاوی یک کاراکتر انگلیسی باشد')
        return password

    def clean_password2(self):
        if self.cleaned_data.get('password1') != self.cleaned_data.get('password2'):
            raise forms.ValidationError("رمز عبور تکرار شده مطابقت ندارد")
        return self.cleaned_data.get('password2')

class SearchForm(forms.Form):
    query=forms.CharField()