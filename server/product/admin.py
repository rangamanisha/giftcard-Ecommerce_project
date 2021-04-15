from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ['name', 'sku', 'product_code']
    search_fields = ('name',)
    readonly_fields = ['created_at', 'updated_at', 'created_by', 'updated_by']
    list_filter = ('created_at',)
    fieldsets = (
        (None, 
            {'fields': [('name'), 
                ('sku', 'product_code', 'image'),
                ('description', )]
            }
        ),
        ('Other Info', 
            {
                'fields': ('created_by', 'created_at'),
                'fields': ('updated_by', 'updated_at')

            }
        ),
    )

    def save_model(self, request, obj, form, change):
        if not obj.created_at:
            obj.created_by = request.user
        obj.updated_by = request.user
        obj.save()

admin.site.register(Product, ProductAdmin)