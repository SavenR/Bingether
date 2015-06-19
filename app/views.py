from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from app.forms import EmailUserCreationForm
from django.contrib.auth.decorators import login_required

# Create your views here.
def join(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/login/")
    else:
        form = UserCreationForm()

    return render(request, "registration/join.html", {'form': form})

def loggedOut(request):
    return render(request, 'registration/logged-out.html')
