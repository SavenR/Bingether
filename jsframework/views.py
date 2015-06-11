from django.shortcuts import render

# Create your views here.
def base(request):
    print('going through base')
    print(request)
    return render(request, 'base.html')