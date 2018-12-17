from django.db import models


class Status(models.Model):
    status = models.CharField(max_length=128, verbose_name='Статус', default='Неоформлена', null=True)

    def __str__(self):
        return "%s" % self.status

    class Meta:
        verbose_name = 'Статус замовлення'
        verbose_name_plural = 'Статуси замовлень'


class Application(models.Model):
    status = models.ForeignKey(Status, verbose_name='Статус', null=True)
    name = models.CharField(
        max_length=128,
        verbose_name='Імя',
        null=True
    )
    phone = models.CharField(
        max_length=128,
        verbose_name='Тел.',
        null=True
    )
    created = models.DateTimeField(
        auto_now_add=True,
        auto_now=False,
        verbose_name='Створена'
    )
    updated = models.DateTimeField(
        auto_now_add=False,
        auto_now=True,
        verbose_name='Оновлена'
    )
    note = models.TextField(
        blank=True,
        verbose_name='Приміткм',
        null=True
    )

    def __str__(self):
        return "%s" % self.id

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'