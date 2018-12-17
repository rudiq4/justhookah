from django.contrib import admin
from .models import *


class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['status', 'name', 'phone',  'created', 'updated', 'note']
    list_display_links = ('name',)

    class Meta:
        model = Application


admin.site.register(Application, ApplicationAdmin)


class StatusAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Status._meta.fields]

    class Meta:
        model = Status


admin.site.register(Status, StatusAdmin)