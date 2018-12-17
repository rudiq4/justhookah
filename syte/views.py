from django.shortcuts import render
from .forms import *


def index(request):
    if request.method != 'POST':
        form = ApplicationForm()
    else:
        form = ApplicationForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'success.html',)
    return render(request, 'index.html', locals())
