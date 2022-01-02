from django_filters import rest_framework as filters
from .models import Employer

class EmployerFilter(filters.FilterSet):
  age_max = filters.NumberFilter(field_name='age', lookup_expr='lte')
  age_min = filters.NumberFilter(field_name='age', lookup_expr='gte')

  yoe_max = filters.NumberFilter(field_name='year_of_experience', lookup_expr='lte')
  yoe_min = filters.NumberFilter(field_name='year_of_experience', lookup_expr='gte')

  name = filters.CharFilter(field_name='name', lookup_expr='iexact')

  class Meta:
      model = Employer
      fields = ['age_max', 'age_min', 'yoe_max', 'yoe_min', 'name']