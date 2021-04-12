from django.contrib import admin
from .models import Brand, BrandImage


class BrandImageInline(admin.TabularInline):
    model = BrandImage
    extra = 0
    readonly_fields = ['created_at', 'updated_at', ]
    fieldsets = (
        (
            "",
            {
                "fields": [
                    ("name", "image", "is_default", "created_at"),
                ]
            },
        ),
    )



class BrandAdmin(admin.ModelAdmin):
    model = Brand
    list_display = ['name', 'is_active', 'sort_order','created_by', 'created_at']
    search_fields = ('name',)
    ordering = ('sort_order', 'name')
    readonly_fields = ['created_at', 'updated_at', 'created_by', 'updated_by']
    inlines = [BrandImageInline,]
    list_filter = ('is_active', 'created_at')
    fieldsets = (
        ("Brand Info", {
            'fields': [
                ('name', 'sort_order', 'is_active', ),
                ('description',)
                ]
            }
        ),
        ('Other Info', 
            {
                'fields': [
                    ('created_by', 'created_at',
                    'updated_by', 'updated_at' )
                ]

            }
        ),
    )

    def save_model(self, request, obj, form, change):
        if not obj.created_at:
            obj.created_by = request.user
        obj.updated_by = request.user
        obj.save()

admin.site.register(Brand, BrandAdmin)